const User = require('../models/User');
const { Register, Login } = require('../controllers/UserController');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

describe('User registration', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/NaCl', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should register a new user', async () => {
    const req = {
      body: {
        username: 'test3',
        fullname: 'test3',
        email: 'test3@gmail.com',
        password: '123456789'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    await Register(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Success');

    const user = await User.findOne({ username: 'test3' });
    expect(user).toBeTruthy();
    expect(user.password).not.toBe('123456789');
  });
});

describe('User login', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/NaCl', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync('123456789', salt);
    await User.create({
      fullname: 'test4',
      email: 'test4@gmail.com',
      username: 'test4',
      password: hash
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should log in an existing user', async () => {
    const req = {
      body: {
        username: 'test4',
        password: '123456789'
      }
    };
    const res = {
      cookie: jest.fn().mockReturnThis(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    await Login(req, res);

    expect(res.cookie).toHaveBeenCalledWith(
      'access_ticket',
      expect.any(String),
      { httpOnly: true }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      fullname: 'test4',
      email: 'test4@gmail.com'
    });
  });

  it('should not log in a non-existing user', async () => {
    const req = {
      body: {
        username: 'nonexistinguser',
        password: '123456789'
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    await Login(req, res);

    expect(res.json).toHaveBeenCalledWith({
      error: 'User not found',
      status: '404'
    });
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('should not log in a user with wrong password', async () => {
    const req = {
      body: {
        username: 'test',
        password: 'wrongpassword'
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
    await Login(req, res);

    expect(res.json).toHaveBeenCalledWith({
      error: 'Wrong password',
      status: '400'
    });
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
