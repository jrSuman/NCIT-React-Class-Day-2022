const NavBar = () => {
  return(
    <div className="flex justify-between p-4">
      {/* logo */}
      <span className="">
        <svg aria-hidden="true" class="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="60px" height="60px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
      </span>
      {/* menus */}
      <div className="">
        <ul className="flex gap-4 font-semibold text-md text-gray-700">
          <li>New</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sports</li>
          <li>Jordan</li>
        </ul>
      </div>

      {/* search and other */}
      <div className="">

        <div className="relative h-10 w-60 rounded-full overflow-hidden">
          <input type="text" className="bg-gray-50 absolute inset-0 pl-12" placeholder="Search"/>
          <div className="absolute top-0 left-0 bottom-0 w-10 bg-gray-50 rounded-full flex items-center justify-center">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
        </div>

        </div>

        <div className="">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default NavBar