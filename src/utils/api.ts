/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-promise-executor-return */
import { parseCookies, setCookie, destroyCookie } from 'nookies';

import { Octokit } from '@octokit/core';

// import ky from 'ky';

// export const BASE_URL = 'https://api.github.com';

const cookies = parseCookies();

const octokit = new Octokit({ auth: cookies.user_oauth_token });

// const kyClient = ky.create({ prefixUrl: BASE_URL });

// const api = {
//   BASE_URL: 'https://api.github.com',
//   getUser: async () => {
//     const response = await kyClient.post('user');
//     console.log(response);
//   },
//   getIssue: async () => {
//     const response = await kyClient.post('repos/OWNER/REPO/issues');
//     console.log(response);
//   },
//   getLabels: async (OWNER: string, REPO: string) => {
//     const response = await kyClient.get(`${OWNER}/${REPO}/labels`);
//     console.log(response);
//     // return await response.json();
//   },
// };

const apiOctokit = {
  getUser: async () => {
    const response = await octokit.request('GET /user', {});
    console.log(response);
    return response;
  },
  getUserIssue: async () => {
    const response = await octokit.request('GET /issues', {});
    console.log(response);
    return response;
  },
  // Label management page
  getRepoAllIssueLabel: async (OWNER: string, REPO: string) => {
    const response = await octokit.request(
      `GET /repos/${OWNER}/${REPO}/labels`,
      {
        owner: 'OWNER',
        repo: 'REPO',
      }
    );
    console.log(response);
    return response;
  },
  getRepoIssueLabel: async (
    OWNER: string,
    REPO: string,
    ISSUE_NUMBER: number
  ) => {
    const response = await octokit.request(
      `GET /repos/${OWNER}/${REPO}/issues/${ISSUE_NUMBER}/labels`,
      {
        owner: OWNER,
        repo: REPO,
        issue_number: ISSUE_NUMBER,
      }
    );
    console.log(response);
    return response;
  },
  createRepoIssueLabel: async (
    OWNER: string,
    REPO: string,
    NAME: string,
    DESCRIPTION: string,
    COLOR: string
  ) => {
    const response = await octokit.request(
      'POST /repos/{owner}/{repo}/labels',
      {
        owner: OWNER,
        repo: REPO,
        name: NAME,
        description: DESCRIPTION,
        color: COLOR,
      }
    );
    console.log(response);
    return response;
  },
  updateRepoIssueLabel: async (
    OWNER: string,
    REPO: string,
    NAME: string,
    NEW_NAME: string,
    DESCRIPTION: string,
    COLOR: string
  ) => {
    const response = await octokit.request(
      `PATCH /repos/${OWNER}/${REPO}/labels/${NAME}`,
      {
        owner: OWNER,
        repo: REPO,
        name: NAME,
        new_name: NEW_NAME,
        description: DESCRIPTION,
        color: COLOR,
      }
    );
    console.log(response);
    return response;
  },
  deleteRepoIssueLabel: async (OWNER: string, REPO: string, NAME: string) => {
    const response = await octokit.request(
      `DELETE /repos/${OWNER}/${REPO}/labels/${NAME}`,
      {
        owner: OWNER,
        repo: REPO,
        name: NAME,
      }
    );
    console.log(response);
    return response;
  },
  // Issue list page
  getRepoIssue: async (OWNER: string, REPO: string) => {
    const response = await octokit.request(
      `GET /repos/${OWNER}/${REPO}/issues`,
      {
        owner: OWNER,
        repo: REPO,
      }
    );
    console.log(response);
    return response;
  },
  createRepoIssue: async (
    OWNER: string,
    REPO: string,
    TITLE: string,
    BODY: string,
    ASSIGNEES: string[],
    MILESTONE: number,
    LABELS: string[]
  ) => {
    const response = await octokit.request(
      `POST /repos/${OWNER}/${REPO}/issues`,
      {
        owner: OWNER,
        repo: REPO,
        title: TITLE,
        body: BODY,
        assignees: ASSIGNEES,
        milestone: MILESTONE,
        labels: LABELS,
      }
    );
    console.log(response);
    return response;
  },
};

export default apiOctokit;
