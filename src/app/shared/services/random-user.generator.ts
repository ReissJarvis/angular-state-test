import { User } from '../models/user.model';

export class RandomUserGenerator {
  private static names = [
    'Cherish Hernandez',
    'Davon Gardner',
    'Kassidy Holloway',
    'Ingrid Boyd',
    'Angie Cochran',
    'Molly Walsh',
    'Stephany Farley',
    'Brenden Lambert',
    'Aleah Collins',
    'Eliza Shepherd',
    'Antonio Molina',
    'Kaylee Ross',
    'Aryanna Beard',
    'Jaliyah Branch',
    'Elvis Adkins',
    'Kailey Lynch',
    'Caiden Stanley',
    'Cindy Montgomery',
    'Cora Friedman',
    'Chaz Howard',
    'Ally Mckay',
    'Katelyn Bruce',
    'Anabella Randolph',
    'Nathalia Petersen',
    'Ismael Soto',
    'Lawrence Mercer',
    'Alayna Acosta',
    'Jesse Shannon',
    'Bethany Terrell',
    'Nasir Schroeder',
  ];

  private static emails = [
    '@gmail.com',
    '@gmail.co.uk',
    '@gmail.pl',
    '@hotmail.com',
    '@hotmail.co.uk',
    '@hotmail.pl',
    'googlemail.com',
    'googlemail.co.uk',
    'googlemail.pl'
  ];

  static newUser(): User {
    const name = this.randomItemFromArray(this.names)

    return new User(
      this.getRandomInt(10000),
      name,
      this.getEmail(name),
      this.getRandomDate()
    );
  }

  private static getEmail(name: string) {
    const emailIdentifier = name.toLowerCase().replace(' ', '_')

    return `${emailIdentifier}${this.randomItemFromArray(this.emails)}`;
  }

  private static randomItemFromArray(array: string[]): string {
    const length = array.length;

    return array[this.getRandomInt(length)];
  }

  private static getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private static getRandomDate(start = new Date('1/01/2000'), end = new Date(), startHour = 9, endHour = 20): Date {
    const date = new Date(+start + Math.random() * (end as any - (start as any)));
    const hour = startHour + Math.random() * (endHour - startHour);
    date.setHours(hour);
    return date;
  }
}
