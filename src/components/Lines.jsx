import { Fragment } from 'react';

/** Renders an array of strings separated by line breaks. */
export default function Lines({ lines }) {
  return lines.map((line, index) => (
    <Fragment key={line}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
