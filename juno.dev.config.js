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
        }
      ],
      storage: [
        // {
        //   collection: 'images',
        //   read: 'managed',
        //   write: 'managed',
        //   memory: 'stable',
        //   mutablePermissions: true
        // }
      ]
    }
  }
}));
