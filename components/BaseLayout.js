import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
  };

export default function BaseLayout(props) {
    return (
        <div>
        <head>
                <title>COVID-19 Survey</title>
            </head>

        <div style={layoutStyle}>
            <Header />
            {props.content}
        </div>
      </div>
    );
}

