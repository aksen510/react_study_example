import "./App.css";
import TodoList from "./example01/ToDoList.tsx";
import ZustandExample from "./example02/zustandExample/page.js";
import RecoilExample from "./example02/recoilExample/page.js";
import ChatComponent from "./example04/ChatComponent.tsx";

function App() {
  // 대신씨
  // const [mode, setMode] = useState('redux');

  // const renderContent = () => {
  //   switch(mode) {
  //     case 'redux':
  //       return (
  //         <Provider store={reduxStore}>
  //           <PokemonList />
  //         </Provider>
  //       );
  //     case 'rtk':
  //       return (
  //         <Provider store={rtkStore}>
  //           <PokemonListRTK />
  //         </Provider>
  //       );
  //     case 'rtkquery':
  //       return (
  //         <Provider store={rtkQueryStore}>
  //           <PokemonListRTKQuery />
  //         </Provider>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  // return (
  //   <div className="App">
  //     <div className="buttons">
  //       <button onClick={() => setMode('redux')}>Redux</button>
  //       <button onClick={() => setMode('rtk')}>RTK</button>
  //       <button onClick={() => setMode('rtkquery')}>RTK Query</button>
  //     </div>
  //     {renderContent()}
  //   </div>
  // );

  return (
    <>
      {/* 석운씨 */}
      <ChatComponent />
      {/* 다은언니 */}
      {/* <ZustandExample /> */}
      {/* <RecoilExample /> */}
      {/* 수훈씨 */}
      {/* <TodoList /> */}
      {/* 진영 */}
      {/* <LetterProvider> */}
      {/* <div className="App">
            <header className="App-header">
                <LetterComponent />
            </header>
        </div> */}
      {/* </LetterProvider> */}
    </>
  );
}

export default App;
