import {defineDevConfig} from '@junobuild/config';

/** @type {import('@junobuild/config').JunoDevConfig} */
export default defineDevConfig(() => ({
  satellite: {
    collections: {
      datastore: [
        {
          collection: 'user_data',
          read: 'managed',
          write: 'managed',
          memory: 'stable',
          mutablePermissions: true
        },
        {
          collection: 'books',
          read: 'public',
          write: 'public',
          memory: 'stable',
          mutablePermissions: true
        },
        {
          collection: 'genres',
          read: 'public',
          write: 'public',
          memory: 'stable',
          mutablePermissions: true
        },
        {
          collection: 'stories',
          read: 'public',
          write: 'public',
          memory: 'stable',
          mutablePermissions: true
        },
      ],
      storage: [
        {
          collection: 'scanned_documents',
          read: 'managed',
          write: 'managed',
          memory: 'stable',
          mutablePermissions: true
        },
        {
          collection: 'book_images',
          read: 'public',
          write: 'public',
          memory: 'stable',
          mutablePermissions: true
        },
        {
          collection: 'genre_images',
          read: 'public',
          write: 'public',
          memory: 'stable',
          mutablePermissions: true
        },
        {
          collection: 'story_images',
          read: 'public',
          write: 'public',
          memory: 'stable',
          mutablePermissions: true
        }
      ]
    }
  }
}));
