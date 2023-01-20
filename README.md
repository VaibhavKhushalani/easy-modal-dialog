# Easy-Modal-Dialog

This modal is designed to fit according to the parent component's size, providing a seamless user experience.

## Installation

```bash
npm i easy-modal-dialog
```

## Usage

```jsx static
import React, { useState } from "react";
import EasyModal from "easy-modal-dialog";
function App() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const Body = (
    <>
      <h5>I am a Modal which can wrap over any Element</h5>
    </>
  );
  return (
  <div>
  <EasyModal open={open} onClose={handleClose} body={Body} />
  </div>
  );
}
)
```

### Features

1. The modal is centered within the parent component, ensuring that it is always visible to the user.
2. The modal adapts to the size of the parent component, providing an optimal viewing experience on any screen.
3. The modal can be easily triggered by a button or link, allowing for a smooth transition between the parent component and the modal.

### Browser Support

This modal has been tested and is compatible with the latest versions of Chrome, Firefox, Safari, and Edge.

### About Author

<span style="margin-right: 50px;"></span><a href="https://www.linkedin.com/in/vaibhav-khushalani-760217136/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width= "50px"></a>
<span style="margin:0 30px;"></span><a href="https://github.com/VaibhavKhushalani"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width= "50px"></a>

### Official NPM Package

<span style="margin:0 30px;"></span><a href="https://www.npmjs.com/package/easy-modal-dialog">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width= "50px" />
</a>
