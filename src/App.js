import logo from './logo.svg';
import './App.css';
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsFunctional from "./components/PropsFunctional";
import PropsClass from "./components/PropsClass";
import ClassState from "./components/ClassState";
import ClassSetState from "./components/ClassSetState";
import FunctionalDestructured from "./components/FunctionalDestructured";
import ClassDestructured from "./components/ClassDestructured";
import FunctionalEventHandling from "./components/FunctionalEventHandling";
import ClassEventHandling from "./components/ClassEventHandling";
import ClassEventBinding from "./components/ClassEventBinding";
import MethodAsPropParent from "./components/MethodAsPropParent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import StyleSheet from "./components/StyleSheet";
import InlineStyle from "./components/InlineStyle";
import './appStyles.css';
import styles from './appStyles.module.css';
import FormHandling from "./components/FormHandling";
import LifeCycleParent from "./components/LifeCycleParent";
import Fragments from "./components/Fragments";
import FragmentsImplementationTable from "./components/FragmentsImplementationTable";
import RegularComponentParent from "./components/RegularComponentParent";
import Refs from "./components/Refs";
import RefsParent from "./components/RefsParent";
import Portals from "./components/Portals";
import ErrorBoundaryFunctional from "./components/ErrorBoundaryFunctional";
import ErrorBoundaryClass from "./components/ErrorBoundaryClass";
import UseHocOne from "./components/UseHocOne";
import UseHocTwo from "./components/UseHocTwo";
import RenderPropCommon from "./components/RenderPropCommon";
import RenderPropOne from "./components/RenderPropOne";
import RenderPropTwo from "./components/RenderPropTwo";
import ContextComponentA from "./components/ContextComponentA";
import {UserProvider} from "./components/Context";
import HTTPget from "./components/HTTPget";
import HttPpost from "./components/HTTPpost";

function App() {
    return (
        <div className="App">
            {/*<FunctionalComponent />*/}
            {/*<ClassComponent />*/}
            {/*<PropsFunctional name="Bruce" hero="Batman"/>*/}
            {/*<PropsClass name="Clark" hero="Superman"/>*/}
            {/*<PropsFunctional name="Barry" hero="Flash">*/}
            {/*<p>This is a child element</p>*/}
            {/*</PropsFunctional>*/}
            {/*<PropsClass name='Diana' hero='Wonder Woman'>*/}
            {/*<button>This is a child element</button>*/}
            {/*</PropsClass>*/}
            {/*<ClassState />*/}
            {/*<ClassSetState />*/}
            {/*<FunctionalDestructured name="Tony" hero="Iron" />*/}
            {/*<ClassDestructured name="Steve" hero="Captain" />*/}
            {/*<FunctionalEventHandling />*/}
            {/*<ClassEventHandling />*/}
            {/*<ClassEventBinding />*/}
            {/*<MethodAsPropParent/>*/}
            {/*<ConditionalRendering/>*/}
            {/*<ListRendering/>*/}
            {/*<StyleSheet primary={true}/>*/}
            {/*<InlineStyle/>*/}
            {/*<h1 className='error'>Error</h1>*/}
            {/*<h1 className={styles.success}>Success</h1>*/}
            {/*<FormHandling/>*/}
            {/*<LifeCycleParent/>*/}
            {/*<Fragments />*/}
            {/*<FragmentsImplementationTable />*/}
            {/*<RegularComponentParent />*/}
            {/*<Refs />*/}
            {/*<RefsParent />*/}
            {/*<Portals />*/}
            {/*<ErrorBoundaryClass>*/}
            {/*    <ErrorBoundaryFunctional hero="Superman"/>*/}
            {/*</ErrorBoundaryClass>*/}
            {/*<ErrorBoundaryClass>*/}
            {/*    <ErrorBoundaryFunctional hero="Batman"/>*/}
            {/*</ErrorBoundaryClass>*/}
            {/*<ErrorBoundaryClass>*/}
            {/*    <ErrorBoundaryFunctional hero="Joker"/>*/}
            {/*</ErrorBoundaryClass>*/}
            {/*<UseHocOne name="Yash"/>*/}
            {/*<UseHocTwo/>*/}
            {/*<RenderPropCommon render={(count, incrementCount) => <RenderPropOne count={count} incrementCount={incrementCount} />} />*/}
            {/*<RenderPropCommon render={(count, incrementCount) => <RenderPropTwo count={count} incrementCount={incrementCount} />} />*/}
            {/*<UserProvider value="Yash">*/}
            {/*    <ContextComponentA />*/}
            {/*</UserProvider>*/}
            {/*<HTTPget />*/}
            {/*<HttPpost />*/}
        </div>
    );
}

export default App;
