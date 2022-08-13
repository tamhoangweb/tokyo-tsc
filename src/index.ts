import { send } from './mailer';
interface Contact {
  email?: string;
  name: string;
  phone: string;
  pet?: Pet;
  addresses?: Address[];
}

interface Pet {
  name: string;
}
interface Address {
  city: string;
}
interface Address {
  ward: string;
}

const newContact: Contact = {
  name: 'tam',
  phone: '090',
  // email:'a@gmail.com',
  addresses: [{ city: 'HCM', ward: 'Q3' }],
};
const otherContact: Contact = {
  name: 'tam',
  phone: '090',
  email: 'a@gmail.com',
  addresses: [],
};

const contacts: Contact[] = [];
contacts.push(newContact);
// console.table(contacts);

class MyContact implements Contact {
  name: string;
  phone: string;
  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

class ContactApp {
  adapter: ContactAdapter;
  constructor(adapter: ContactAdapter) {
    this.adapter = adapter;
  }
  async render() {
    const contacts: Contact[] =
      await this.adapter.getData();
    console.table(contacts);
  }
}

interface ContactAdapter {
  getData: () => Promise<Contact[]>;
}
class MyContactApdapter implements ContactAdapter {
  getData() {
    const contacts: Contact[] = [
      { name: 'A', phone: '123' },
      { name: 'B', phone: '456' },
    ];
    return Promise.resolve(contacts);
  }
}
const adapter = new MyContactApdapter();
const app = new ContactApp(adapter);
app.render();
