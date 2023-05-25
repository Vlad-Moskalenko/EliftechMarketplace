export const MarketsBar = ({ onClick, markets }) => {
  return (
    <aside>
      <ul>
        {markets.map((market, index) => (
          <li key={index}>
            <button onClick={onClick} id={market} type="button">
              {market}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
