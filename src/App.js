import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'; // The path may vary
import { generateClient } from 'aws-amplify/api';

Amplify.configure(awsExports);

const client = generateClient();

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await client.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await getUrl({ key: note.id });
          note.image = url;
        } return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name
    };
    const result = await client.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    if (!!data.image) await uploadData({ key: result.data.createNote.id, data: image }).result;
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await remove({ key: id });
    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App flex flex-col items-center p-8">

      <Image
        src="/FINAL LOGO.png"
        alt="Marcoverse Logo"
        className="w-24 mx-auto mb-6 rounded-lg shadow-lg"
      />
      <Heading level={1}>Bucket List Tracker</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="column" justifyContent="center" gap="4">
          <TextField
            name="name"
            placeholder="Enter your wish"
            label="Enter your wish"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Wish Description"
            label="Wish Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">

            Add a wish
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current wishes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image.url.href}
                alt={`visual aid for ${note.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete wish
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);