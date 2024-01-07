"use client";
import React from "react";
import { useState } from "react";
import copy from "clipboard-copy";
import { Style } from "./CodeCard.css";
import { Tooltip, Button } from "@nextui-org/react";
const handleCopyClick = async (e) => {
  try {
    console.log(`${e}`);
    await copy(removeHtmlAndConvertEntities(e));
    ///setIsCopied(true);
  } catch (error) {
    ///console.error("Failed to copy text to clipboard", error);
  }
};

function removeHtmlAndConvertEntities(inputHtml) {
  /// Remove HTML tags
  const plainText = inputHtml.replace(/<[^>]*>/g, "");

  /// Convert HTML entities
  const decodedText = new DOMParser().parseFromString(plainText, "text/html")
    .body.textContent;

  return decodedText;
}

function CodeCard({ code, language, key }) {
  return (
    <div className="codeAppCon" key={`code${key}`}>
      <TooltipButtons codes={code} />
      <div className="codeApp" dangerouslySetInnerHTML={{ __html: code }}></div>
    </div>
  );
}

export default CodeCard;

export function TooltipButtons({ codes }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2 ">
      <Tooltip
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        content="Click to Copy"
      >
        <div className="copybutton">
          <Button
            className="copycodebutton"
            onClick={() => handleCopyClick(codes)}
          >
            {"Copy"}
          </Button>
        </div>
      </Tooltip>
    </div>
  );
}