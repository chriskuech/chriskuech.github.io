"use client";

export type Animation = {
  start: () => void;
  stop: () => void;
  resize: () => void;
};
