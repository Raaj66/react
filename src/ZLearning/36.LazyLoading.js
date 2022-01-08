import React, { Suspense,lazy,Component } from 'react'
const UncontrolledCompo = lazy(()=>import("./34.UncontrolledCompo"));
const ControlledCompo = lazy(()=>import("./35.ControlledCompo"));

export default class LazyLoading extends Component {
    render() {
        return (
            <div>
                <h1>Lazy Loading</h1>
                <Suspense fallback={<div>Please wait...</div>}>
                    <UncontrolledCompo />
                    <ControlledCompo />
                </Suspense>
            </div>
        )
    }
}
