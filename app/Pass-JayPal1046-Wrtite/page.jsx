"use client";
import React from "react";
import { Style } from "./Write.css";
import Plus from "./add.png";
import Minus from "./minus.png";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useForm, useFieldArray } from "react-hook-form";

const sendDataToApi = async (
  title,
  url,
  value,
  selectedOption,
  selectedCatOption,
  subtitle
) => {
  const lowercaseString = await title.toLowerCase().trim();
  const stringWithHyphens = await lowercaseString.replace(/\s+/g, "-"); // Replace spaces with hyphens

  const data = {
    title: title,
    url: url,
    content: value,
    contentType: selectedOption,
    avatarName: "Jayprakash Pal",
    date: Date.now(),
    Category: selectedCatOption,
    id: stringWithHyphens,
    ViewCount:0,
    subTitle:subtitle,
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/arvind-cfe36.appspot.com/o/Category%2Ftravel.jpg?alt=media&token=2092d677-c36c-4e9b-96d2-55e865909388",
  };
  try {
    const response = await fetch(
      "https://jaypal1046.pythonanywhere.com/addPostbyjson/" +
        stringWithHyphens,
      {
        method: "Post",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Error while sending data to API");
    }

    const responseData = await response.json();
    console.log("API Response:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};

function WritePost() {
  const [inputList, setInputList] = useState(["Start Writing from here"]); // Initial state with one empty input

  const [selectedOption, setSelectedOption] = useState(["ImageUrl"]);

  const [selectedCatOption, setSelectedCatOption] = useState("Coding");

  const handleInputChange = (index, value) => {
    const newList = [...inputList];
    newList[index] = value;
    setInputList(newList);
  };

  const handleAddInput = () => {
    setSelectedOption([...selectedOption, "ImageUrl"]);
    setInputList([...inputList, ""]);
  };

  const handleRemoveInput = (index) => {
    const newList = [...inputList];
    newList.splice(index, 1);
    setInputList(newList);

    const newListsetect = [...selectedOption];
    newListsetect.splice(index, 1);
    setSelectedOption(newListsetect);
  };

  const handleOptionChange = (e, index) => {
    const newList = [...selectedOption];
    console.log(e);
    console.log();
    newList[index] = e.target.value;
    setSelectedOption(newList);
  };

  const handleOptionCatChange = (e) => {
    setSelectedCatOption(e.target.value);
  };

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [subtitle, setSubTitle] = useState("");

  const onFormSubmit = (data) => {
    console.log(data);
    console.log(inputList);
  };

  return (
    <main>
      <div className="WContainer">
        <div className="WtextContainer">
          <input
            type="text"
            value={title}
            placeholder="Input title of Post"
            className="Winput"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="WtextContainer">
          <input
            type="text"
            value={subtitle}
            placeholder="Input Sub title of Post"
            className="Winput"
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="WtextContainer">
          <input
            type="text"
            value={url}
            placeholder="Plase input url of Post Image "
            className="Winput"
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <label>
          Please Select Category of Post:
          <select
            // value={selectedOption[index]}
            onChange={(e) => handleOptionCatChange(e)}
          >
            <option value="Coding">Coding</option>
            <option value="Fastion">Fastion</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Culture">Culture</option>
            <option value="Style">Style</option>
          </select>
        </label>

        {inputList.map((input, index) => {
          return (
            <div key={index} className="Wediter">
              <div className="selectButton">
                <div className="selectText">
                  <label>
                    Select Content type of Post:
                    <select
                      // value={selectedOption[index]}
                      onChange={(e) => handleOptionChange(e, index)}
                    >
                      <option value="ImageUrl">ImageUrl</option>
                      <option value="PlainText">Plain Text</option>
                      <option value="Code">Code Text</option>
                    </select>
                  </label>
                </div>
                <div className="addButtonContainerP">
                  <button
                    className="WButton"
                    onClick={() => handleRemoveInput(index)}
                  >
                    <Image
                      src={Minus}
                      alt="Remove Icons"
                      width={16}
                      height={16}
                    />
                  </button>
                </div>
              </div>

              {selectedOption[index] === "ImageUrl" ? (
                <input
                  type="text"
                  key={index}
                  className="Winput"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="Enter Image url here"
                />
              ) : selectedOption[index] === "PlainText" ? (
                <div className="WTextAreaCon" key={index}>
                  <ReactQuill
                    type="text"
                    value={input}
                    className="WTextArea"
                    onChange={(e) => handleInputChange(index, e)}
                    placeholder="tell me your story..."
                  />
                </div>
              ) : (
                <div className="WTextAreaCon">
                  <ReactQuill
                    type="text"
                    key={index}
                    value={input}
                    className="WTextArea"
                    onChange={(e) => handleInputChange(index, e)}
                    placeholder="tell me your story..."
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* <div className="WButtonPublish">
          <button type="submit" onClick={onFormSubmit(inputList)}>
            Publish
          </button>
        </div> */}
      </div>
      <div className="addButtonContainer">
        <div className="addButtonContainerP">
          <button className="WButton" onClick={handleAddInput}>
            <Image src={Plus} alt="Plus Icons" width={16} height={16} />
          </button>
        </div>
      </div>

      <div className="WButtonPublish">
        <button
          onClick={() =>
            sendDataToApi(
              title,
              url,
              inputList,
              selectedOption,
              selectedCatOption,
              subtitle
            )
          }
          className="WPublish"
        >
          Publish
        </button>
      </div>
    </main>
  );
}

export default WritePost;
{
  /* <ReactQuill
            className="WTextArea"
            value={value}
            onBlur={setvalue}
            placeholder="tell me your story..."
          /> */
}

{
  /* {open && (
            <div className="Wadd">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />

            
                <button className="WaddButton">
                <label htmlFor="image">
                  <Image
                    src={Images}
                    alt="image Icons"
                    width={16}
                    height={16}
                  />
                  </label>
                </button>
              
              <button className="WaddButton">
                <Image
                  src={External}
                  alt="Exterval Icons"
                  width={16}
                  height={16}
                />
              </button>
              <button className="WaddButton">
                <Image src={Videos} alt="Video Icons" width={16} height={16} />
              </button>
            </div>
          )} */
}
