import { NextApiRequest, NextApiResponse } from "next/types";
import React from "react";
import satori from "satori";
import fs from "fs";
import { ImageResponse } from "@vercel/og";

const openSans = fs.readFileSync(process.cwd() + "/fonts/OpenSans-Regular.ttf");
const openSansSemiBold = fs.readFileSync(
  process.cwd() + "/fonts/OpenSans-SemiBold.ttf"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "GET") return res.status(404).send("Invalid Route");

  const queries = req.query as Record<string, string>;

  if (queries.type == "leetcode") {
    res.setHeader("Content-Type", "image/png");
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#111827",
            padding: "1rem 3rem",
            borderRadius: "10px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontFamily: "Open Sans",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            {queries.name}
          </h1>
          <p
            style={{
              color: "#d1d5db",
              margin: "5px 0",
            }}
          >
            {queries.topics}
          </p>
          <p
            style={{
              color: "#d1d5db",
              margin: "5px 0",
            }}
          >
            {queries.difficulty}
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "3rem",
              display: "flex",
            }}
          >
            <img src="https://isatvik.com/favicon.ico" alt="" />
          </div>
        </div>
      ),
      {
        width: 600,
        height: 337.5,
        fonts: [
          {
            name: "Open sans",
            data: openSans,
            style: "normal",
            weight: 400,
          },
          {
            name: "Open sans",
            data: openSansSemiBold,
            style: "normal",
            weight: 600,
          },
        ],
      }
    );
  }

  res.status(404).send("");
}
