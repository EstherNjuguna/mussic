import { Dropdown } from 'bootstrap';
import React from 'react'

const DropDown= () => {
  return (
    <div class="dropdown">
  <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="{}">Country-Music</a></li>
    <li><a class="dropdown-item" href="#">RnB</a></li>
    <li><a class="dropdown-item" href="#">Hiphop</a></li>
  </ul>
</div>
  )
 };

export default DropDown;
