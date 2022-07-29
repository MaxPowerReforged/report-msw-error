// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import {cleanup} from "@testing-library/react";
import {mockServer} from "./__mocks__/gql/server";

afterEach(cleanup);

beforeAll(() => mockServer.listen());

afterEach(async () => {
    mockServer.resetHandlers();
});

afterAll(() => mockServer.close());
