import ICard from "#/interface/ICard";
import IUpdate from "#/interface/IUpdates";
import axios from "axios";

const token = process.env["GITHUB_KEY"];

const headers = {
  // Need Accept header if you want the content in base 10 format

  Accept: "application/vnd.github.v3.raw",
  Authorization: `token ${token}`,
};

const baseUrl = "https://api.github.com/repos/satvik-1203/";
const leetCodeRepo = "daily-leetcoding";

// Gets post from github api

export const getPostsForLeetCode = async (): Promise<ICard[]> => {
  const url = `${baseUrl}${leetCodeRepo}/contents/data/leetcode.json?ref=main`;
  try {
    const { data } = await axios.get(url, {
      headers,
    });

    return data;
  } catch {
    console.error("No Post found in the URL ", url);
    return [];
  }
};

export const getPostForLeetCode = async (postUrl: string): Promise<string> => {
  const url = `${baseUrl}${leetCodeRepo}/contents/code/${postUrl}.md?ref=main`;
  try {
    const { data } = await axios.get(url, { headers });

    return data;
  } catch {
    console.log(url);
    throw new Error("File not found in the directory");
  }
};

const portfolioRepo = "Portfolio_main";

export const getUpdates = async (): Promise<[IUpdate, IUpdate]> => {
  const url = `${baseUrl}${portfolioRepo}/contents/data/updates.json`;

  try {
    const { data } = await axios.get(url, { headers });
    return data;
  } catch {
    throw new Error("File not found");
  }
};
