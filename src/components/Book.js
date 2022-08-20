export default function Book({ el, update }) {

  const { title, authors, imageLinks: { smallThumbnail } = '', shelf = 'None' } = el
  const shelfOptions = ['currentlyReading', 'wantToRead', 'read', 'None']

  return (
    <li style={{listStyle : 'none'}}>
      <div className='book'>
        <div className='book-top'>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${smallThumbnail})`
            }}
          >
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(e) => update(e, el)} >
              <option value="none" disabled>
                Move to...
              </option>
              {shelfOptions.map((x, i) => (
                <option key={i} value={x}>{x}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.map(author => (author))}</div>
      </div>
    </li>

  );
}