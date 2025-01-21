"use client";
import React from "react";

export interface ContactProps {
  title: string;
  urls: { url: string; name: string }[];
}

const Contact: React.FC<ContactProps> = ({ title, urls }) => {
  return (
    <div>
      <h1>{title}</h1>
      {urls.map(({ url, name }) => (
        <p key={name}>
          {name}:{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </p>
      ))}
      <p>Phone: (123) 456-7890</p>
      <p>Email: contact@hapkidocolima.com</p>
      <p>
        Facebook:{" "}
        <a
          href="https://www.facebook.com/hapkidocolima"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hapkido Colima
        </a>
      </p>
    </div>
  );
};

export default Contact;
