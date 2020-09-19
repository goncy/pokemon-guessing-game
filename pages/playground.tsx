import React from "react";

import Button from "~/ui/controls/Button";
import Spinner from "~/ui/feedback/Spinner";
import TextField from "~/ui/inputs/TextField";

const PlaygroundRoute: React.FC = () => {
  return (
    <div>
      <Button>Comun</Button>
      <Button type="primary">Primary</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
      <Button type="success">Success</Button>
      <Spinner />
      <TextField value="sarasa" onChange={() => null} />
    </div>
  );
};

export default PlaygroundRoute;
