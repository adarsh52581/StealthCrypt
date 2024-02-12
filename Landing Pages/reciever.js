import * as React from "react";
import styled from "styled-components";

function MyComponent(props) {
  return (
    <Div>
      <Div2>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c779e328a64b8d9d4d2082826a589a9734b4c48f930cba13c98e7501beca5eda?"
        />
        <Div3>StealthCrypt</Div3>
      </Div2>
      <Div4>
        <Div5>
          <Div6>Decrypt Image</Div6>
          <Div7>Received Image</Div7>
          <Div8>
            <Div9>
              <Img2
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f6be0cdc82e15f7641839cc75c0ef62bf61f086cf88dd657fa78a72a99f52c?"
              />
              <Div10>Click to upload the image</Div10>
            </Div9>
          </Div8>
          <Div11>Decryption Key</Div11>
          <Div12>Enter your key here...</Div12>
          <Div13>Decrypt Message</Div13>
        </Div5>
      </Div4>
    </Div>
  );
}
