# Contributing to Katachi

## Ways to Contribute

- **Opening an issue.** Most likely it will be a bug you found in the library, a performance improvement or anything that can be relevant for the library to work better.

- **Reviewing an issue or a pull request.** If you believe an issue needs discussion or you have the knowledege to help reviewing a pull request. All that is very welcome.

- **Sending a pull request:** See in the secion below.

- **Enjoy the app:** Lets make this library great :)

## Sending a pull request

- If you send a PR related to an issue that is not assigned, you can comment on the issue that you would like to work on it.

- If you want to send a PR for a feature that is not currently implemented. It needs to be discussed and we cannot guarantee that everything will be implemented. Therefore, preparing a detailed RFC (request for changes) as an issue is a good idea.

## Our Development Process

1. Fork the repo and create your branch from `master`

2. Run `yarn`

3. Prefer small pull requests focused on one change

4. Verify that yarn lint passes

5. Write types if necessary and check that yarn test:build passes

6. Write tests relevant to your changes and check that yarn test:unit passes