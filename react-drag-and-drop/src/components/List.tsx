import * as React from 'react';

interface Props {}

const List: React.FC<Props> = () => {
  const [listItems, setListItems] = React.useState(
    Array.from(Array(30).keys(), (x) => x + 1),
  );

  const [isFetching, setIsFetching] = React.useState<boolean>(false);

  React.useEffect(() => {
    // scrollTop, scrollHeight, clientHeight
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (!(scrollTop + clientHeight >= scrollHeight - 5)) {
      return;
    }
    setIsFetching(true);
    console.log('fetching more data');
  }

  React.useEffect(() => {
    if (!isFetching) {
      return;
    }
    getMoreItems();
  }, [isFetching]);

  function getMoreItems() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(30).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 3000);
  }

  return (
    <ul className='listitemList'>
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
      {isFetching && <h2>...Loading!!!</h2>}
    </ul>
  );
};
export default List;
