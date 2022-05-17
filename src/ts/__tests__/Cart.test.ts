import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

describe('several tests with follow objects: book, movie, music album ', () => {
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const movie = new Movie(
    1002,
    'Мстители',
    2012,
    'США',
    'Мстители, общий сбор!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17',
    999
  );
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  test('add a new book to a cart', () => {
    const cart = new Cart();
    cart.add(book);
    const result = cart.items;
    const expected = [book];
    expect(result).toEqual(expected);
  });

  test('add a new movie to a cart', () => {
    const cart = new Cart();
    cart.add(movie);
    const result = cart.items;
    const expected = [movie];
    expect(result).toEqual(expected);
  });

  test('add a new music album to a cart', () => {
    const cart = new Cart();
    cart.add(musicAlbum);
    const result = cart.items;
    const expected = [musicAlbum];
    expect(result).toEqual(expected);
  });

  test('add all three objects to a cart', () => {
    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    const result = cart.items;
    const expected = [book, movie, musicAlbum];
    expect(result).toEqual(expected);
  });

  test('get a total price without discount', () => {
    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    const result = cart.getTotalPriceWithoutDiscount();
    const expected = 3899;
    expect(result).toEqual(expected);
  });

  test('get a total price with discount', () => {
    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    const result = cart.getTotalPriceWithDiscount(10);
    const expected = 3509.1;
    expect(result).toEqual(expected);
  });

  test('remove an item from cart', () => {
    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    cart.removeItem(1002);
    const result = cart.items;
    const expected = [book, musicAlbum];
    expect(result).toEqual(expected);
  });
});
