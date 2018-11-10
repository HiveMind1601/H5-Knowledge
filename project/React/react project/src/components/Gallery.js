import React, { Component } from 'react';
import GalleryGrid from "./Gallery-grid"
import { connect } from 'react-redux';
import {fetchList} from '../actions'
class Gallery extends Component {
    componentWillMount(){
        this.props.fetchList({url:'homelists'})
    }
    changePage(event){
        const page  = event.currentTarget.getAttribute('data-page');
        const params = {page: parseInt(page),url:'homelists'};
        this.props.fetchList(params);
    }
    render() {
        const {lists} = this.props;
        console.log(this.props,'6666666')
        var proList=[]
        var className=''
        var pages=1
        var outputPages = [];
        var pageTotal=0;

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
                if(i<2){
                    if(i==0){
                        className="col-md-8 gallery-grid glry-one"
                    }else{
                        className="col-md-4 gallery-grid glry-two"
                    }
                }else{
                    className="col-md-3 gallery-grid"
                }
                proList.push(
                    <div className={className} key={i}>
                        <GalleryGrid {...lists.subjects[i]}></GalleryGrid>
                    </div>
                )
            }(i)
        }



        return (
            <div className="gallery">
                <div className="container">
                    <div className="gallery-grids">
                        {proList}
                    </div>
                    <ul className="pagination">
                        {outputPages}
                    </ul>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps =state=>{
    //console.log(state)
	return {
		lists: state.reducer.lists
    }
}


const CounterContext = connect(mapStateToProps,{fetchList})(Gallery);

export default CounterContext;