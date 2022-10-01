import { Redis } from "@upstash/redis";
import { SetCommandOptions } from "@upstash/redis/types/pkg/commands/set";

//
const redisUrl = process.env["REDIS_URL"] || "";
const redisToken = process.env["REDIS_TOKEN"] || "";

const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});

export const getCache = async (key: string): Promise<unknown> => redis.get(key);

export const setCache = async (
  key: string,
  data: any,
  opts?: SetCommandOptions
): Promise<void> => redis.set(key, data, opts);
