import { Money } from './money.model';

export class Round {
  'Name': string;
  'Details of the round': string;
  'Date of round': string;
  'Cap Table log': string;
  'Number of shares per round': number;
  'Pre Money': string;
  'Investment': Money;
  'Post Money': Money;
  'Shares Outstanding': string;
  'Price per Share': Money;
  'New Shares Issued': string;
  'PSOs granted': string;
}
