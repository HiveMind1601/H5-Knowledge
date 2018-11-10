import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchList} from '../actions'
import ProductsGrid from './Products-grid'
class Products extends Component {
    componentWillMount(){
		this.props.fetchList({url:'products'});
    }
    changePage(event){
        const page  = event.currentTarget.getAttribute('data-page');
        const params = {page: parseInt(page),url:'products'};
        this.props.fetchList(params);
    }
    render() {
        const {lists} = this.props;
        var proList=[]
        var pages=1
        var outputPages = [];

        if( !lists.subjects){
			return <div>数据加载中...</div>
		}

        pages = Math.ceil(lists.total/6); 
        for(let i=1;i<=pages;i++){
            outputPages.push(<li key={i}><a href="javascript:void(0)" data-page={i} 
            onClick={(e) => this.changePage(e)}>{i} <span className="sr-only"></span></a></li>)
        }

        for(let i=0;i<lists.subjects.length;i++){
            !function(i){
                proList.push(
                    <ProductsGrid {...lists.subjects[i]} key={i}></ProductsGrid>
                )
            }(i)
            
        }
        return (
            <div>
            <div className="products">	 
            <div className="container">
                <h2>Our Products</h2>			
                <div className="col-md-9 product-model-sec">
                    {proList}
                    <ul className="pagination">
                        {outputPages}
                    </ul>
                </div>	
                
                <div className="col-md-3 rsidebar span_1_of_left">
                    <section  className="sky-form">
                        <div className="product_right">
                            <h4 className="m_2"><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Categories</h4>
                            <div className="tab1">
                                <ul className="place">								
                                    <li className="sort">Regular Cakes</li>
                                    <li className="by"><span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></li>								
                                </ul>
                                <div className="clearfix"> </div>
                                <div className="single-bottom">						
                                    <a href="#"><p>Cassata</p></a>
                                    <a href="#"><p>Cheesecake</p></a>
                                    <a href="#"><p>Coconut cake</p></a>
                                    <a href="#"><p>Cupcake</p></a>
                                </div>
                            </div>						  
                            <div className="tab2">
                                <ul className="place">								
                                    <li className="sort">Special Cakes</li>
                                    <li className="by"><span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></li>
                                </ul>
                                <div className="clearfix"> </div>
                                <div className="single-bottom">						
                                    <a href="#"><p>Delicious Cakes</p></a>
                                    <a href="#"><p>Gingerbread</p></a>									
                                </div>
                            </div>
                            <div className="tab3">
                                <ul className="place">								
                                    <li className="sort">Eggless Cake</li>
                                    <li className="by"><span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></li>
                                </ul>
                                <div className="clearfix"> </div>
                                <div className="single-bottom">						
                                    <a href="#"><p>Milk Cakes</p></a>
                                    <a href="#"><p>Fruits Cakes</p></a>
                                </div>
                            </div>
                            <div className="tab4">
                                <ul className="place">								
                                    <li className="sort">2-3 Tier Cakes</li>
                                    <li className="by"><span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></li>
                                </ul>
                                <div className="clearfix"> </div>
                                <div className="single-bottom">						
                                    <a href="#"><p>Twist 4 tier</p></a>
                                    <a href="#"><p>Floral Tier</p></a>
                                    <a href="#"><p>Double Heartshape</p></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section  className="sky-form">
                        <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>DISCOUNTS</h4>
                        <div className="row row1 scroll-pane">
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked=""/><i></i>Upto - 10% (20)</label>
                            </div>
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>70% - 60% (5)</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>50% - 40% (7)</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>30% - 20% (2)</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>10% - 5% (5)</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>30% - 20% (7)</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>10% - 5% (2)</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Other(50)</label>
                            </div>
                        </div>
                    </section>  				 
                    <section  className="sky-form">
                        <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Price</h4>
                        <ul className="dropdown-menu1">
                            <li>
                                <a href="">								               
                                    <div id="slider-range"></div>							
                                    <input type="text" id="amount" style={{border: 0, fontWeight: 'normal',   fontFamily: 'Dosis-Regular'}} />
                                </a>
                            </li>			
                        </ul>
                    </section>
                    <section  className="sky-form">
                        <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>By Flavour</h4>
                        <div className="row row1 scroll-pane">
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked=""/><i></i>Vanilla</label>			
                            </div>
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Chocolate</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Butterscotch</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Strawberry</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Black Forest</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Mixed Fruit</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Honey</label>
                            </div>
                        </div>
                    </section>
                    <section  className="sky-form">
                        <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Weight</h4>
                        <div className="row row1 scroll-pane">
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked=""/><i></i>Half KG</label>
                            </div>		
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>One KG</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>TwO KG</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>More</label>
                            </div>
                        </div>
                    </section>	
                    <section  className="sky-form">
                        <h4><span className="glyphicon glyphicon-minus" aria-hidden="true"></span>Color</h4>
                        <div className="row row1 scroll-pane">
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked=""/><i></i>White</label>
                            </div>
                            <div className="col col-4">
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Pink</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Gold</label>
                                <label className="checkbox"><input type="checkbox" name="checkbox"/><i></i>Silver</label>
                            </div>
                        </div>
                    </section>			 
                </div>
                <div className="clearfix"> </div>
            </div>
        </div>
            </div>
        )
        
    }
    componentDidMount(){
        $(function()
        {
            $('.scroll-pane').jScrollPane();
        });
        $(document).ready(function(){
            $(".tab1 .single-bottom").hide();
            $(".tab2 .single-bottom").hide();
            $(".tab3 .single-bottom").hide();
            $(".tab4 .single-bottom").hide();
            $(".tab5 .single-bottom").hide();
            
            $(".tab1 ul").click(function(){
                $(".tab1 .single-bottom").slideToggle(300);
                $(".tab2 .single-bottom").hide();
                $(".tab3 .single-bottom").hide();
                $(".tab4 .single-bottom").hide();
                $(".tab5 .single-bottom").hide();
            })
            $(".tab2 ul").click(function(){
                $(".tab2 .single-bottom").slideToggle(300);
                $(".tab1 .single-bottom").hide();
                $(".tab3 .single-bottom").hide();
                $(".tab4 .single-bottom").hide();
                $(".tab5 .single-bottom").hide();
            })
            $(".tab3 ul").click(function(){
                $(".tab3 .single-bottom").slideToggle(300);
                $(".tab4 .single-bottom").hide();
                $(".tab5 .single-bottom").hide();
                $(".tab2 .single-bottom").hide();
                $(".tab1 .single-bottom").hide();
            })
            $(".tab4 ul").click(function(){
                $(".tab4 .single-bottom").slideToggle(300);
                $(".tab5 .single-bottom").hide();
                $(".tab3 .single-bottom").hide();
                $(".tab2 .single-bottom").hide();
                $(".tab1 .single-bottom").hide();
            })	
            $(".tab5 ul").click(function(){
                $(".tab5 .single-bottom").slideToggle(300);
                $(".tab4 .single-bottom").hide();
                $(".tab3 .single-bottom").hide();
                $(".tab2 .single-bottom").hide();
                $(".tab1 .single-bottom").hide();
            })	
        });
        $(function(){
            $( "#slider-range" ).slider({
                range: true,
                min: 0,
                max: 100000,
                values: [ 500, 100000 ],
                slide: function( event, ui ) {  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );

        });
    }
}

const mapStateToProps =state=>{
    //console.log(state)
	return {
		lists: state.reducer.lists
    }
}


const CounterContext = connect(mapStateToProps,{fetchList})(Products);

export default CounterContext;