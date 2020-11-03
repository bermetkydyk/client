import React, { Component } from 'react';
import M from "materialize-css";



class Goal extends Component {

    // componentDidMount() {
    //     let carousel = document.querySelectorAll('.carousel.carousel-slider');
    //
    //     let options = {
    //         fullWidth: true,
    //         indicators: true
    //     };
    //
    //     M.Carousel.init(carousel, options);



    // render() {
    //
    //     return (
    //         <div>
    //             <h1>Goal Page 1</h1>
    //         </div>
    //     );
    // }
    componentDidMount() {
        let Collapsible = document.querySelectorAll('.collapsible');
        let FormSelect = document.querySelectorAll('select');
        let options = {

        };

        M.Collapsible.init(Collapsible, options);
        M.FormSelect.init(FormSelect, options);
    }


    render() {

        return (
            <>

                    <nav>
                        <div class="nav-wrapper white">
                        <a href="#" className="brand-logo center teal-text">Goal</a>
                        </div>
                    </nav>


                    <div className="container" style={{marginTop: "40px"}}>
                        <div class="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s12">
                                        <select>
                                        <option value="" disabled selected>Choose a goal type</option>
                                        <option value="1">Travel</option>
                                        <option value="2">Auto</option>
                                        <option value="3">Property</option>
                                        <option value="4">Other</option>
                                        </select>
                                        <label>Goal Type</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                    <input placeholder="$" id="goal_amount" type="text" class="validate"></input>
                                    <label for="goal_amount">Amount</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                    <input placeholder="Add a tag" id="goal_tag" type="text" class="validate"></input>
                                    <label for="goal_tag">Tag(s)</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="input-field col s12">
                                    <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                                    <label for="textarea2">Notes</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="input-field col s12">
                                    <button class="btn btn-large waves-effect waves-light col s12 teal darken-3" type="submit" name="action">Add</button>
                                    </div>
                                    <div class="input-field col s12">
                                        <a className="btn btn-large waves-effect waves-light col s12 teal lighten-3" href="/summary">Cancel</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </>
        );
    };
}

export default Goal;
