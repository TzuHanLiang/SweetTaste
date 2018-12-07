import React from "react";

const pagination = () => {
  return (
    <div>
      <ul class="m-pagination h-flex h-justify-content-end h-justify-content-lg-center">
        <li>
          <a href="#" class="m-pagination_link">
            <i class="fas fa-angle-left" />
          </a>
        </li>
        <li>
          {" "}
          <a href="#" class="m-pagination_link">
            1
          </a>
        </li>
        <li>
          {" "}
          <a href="#" class="m-pagination_link">
            2
          </a>
        </li>
        <li>
          {" "}
          <a href="#" class="m-pagination_link">
            3
          </a>
        </li>
        <li>
          {" "}
          <a href="#" class="m-pagination_link">
            <i class="fas fa-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default pagination;
