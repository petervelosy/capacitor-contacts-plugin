import { WebPlugin } from '@capacitor/core';
import {CapContactsPlugin, PermissionStatus, Contact, MatchStatus} from './definitions';

export class CapContactsWeb extends WebPlugin implements CapContactsPlugin {
  constructor() {
    super({
      name: 'CapContacts',
      platforms: ['web']
    });
  }

  async getPermissions(): Promise<PermissionStatus> {
    throw new Error('getPermission not available');
  }

  async getContacts(): Promise<{contacts: Contact[]}> {
    throw new Error('getContacts not available');
  }

  async getContact(): Promise<Contact> {
    throw new Error('getContact not available');
  }

  async contactsMatch(): Promise<MatchStatus> {
    throw new Error('contactsMatch not available');
  }

}

const CapContacts = new CapContactsWeb();

export { CapContacts };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapContacts);
