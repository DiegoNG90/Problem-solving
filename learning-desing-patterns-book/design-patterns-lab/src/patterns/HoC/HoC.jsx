import { useState, useEffect } from 'react';
const withLoading = (Component, url) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((e) => console.error('Error', e));
    }, []);

    if (!data) return <div> Loading...</div>;

    return <Component data={data} {...props} />;
  };
};

export default withLoading;
