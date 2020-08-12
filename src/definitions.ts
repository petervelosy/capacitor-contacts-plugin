declare module "@capacitor/core" {
  interface PluginRegistry {
    CapContacts: CapContactsPlugin;
    CapContactsPhoneContact: Contact;
    CapContactsPermissionStatus: PermissionStatus;
  }
}

export interface PermissionStatus {
  granted: boolean;
}

export interface MatchStatus {
  match: boolean;
}

export interface ContactsMatchArgs {
  contact1: Contact;
  contact2: Contact;
}

export interface LookupArgs {
  androidContactLookupKey?: string;
  contactId?: string;
}

export interface Contact {
  contactId: string;
  androidContactLookupKey?: string;
  displayName?: string;
  phoneNumbers: string[];
  emails: string[];
  organizationName?: string;
  organizationRole?: string;
  birthday?: string;
}

export interface CapContactsPlugin {
  getPermissions(): Promise<PermissionStatus>;
  getContacts(): Promise<{contacts: Contact[]}>;
  getContact(options: LookupArgs): Promise<Contact>;
  contactsMatch(options: ContactsMatchArgs): Promise<MatchStatus>;
}
