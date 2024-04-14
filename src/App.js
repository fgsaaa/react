import logo from './logo.svg';
import './App.css';
import jsf from 'json-schema-faker';

function App() {



    return (
    <div className="App">
        {JSON.stringify(test())}


    </div>
  );
}
  function test(){
      const schema = {
          type: "object",
          properties: {
              name: { type: "string", faker: "name.findName" },
              age: { type: "integer", minimum: 18, maximum: 60 },
              gender: { type: "string", enum: ["男", "女"] },
          },
      };
    let value=    jsf.generate(schema);
    console.log(value)
      return value
  }
export default App;
