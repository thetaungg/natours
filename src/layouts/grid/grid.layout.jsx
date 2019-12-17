import React from "react";
import './grid.styles.scss';

const Grid = ({gridType, children}) => {
    return(
        <section className='grid'>
            <div className={`row ${gridType}`}>
                {
                    children.map((child,index) =>

                        <div key={index} className={`col-${index}`}>
                            {child}
                        </div>
                    )
                }
            </div>
        </section>
    )
};

export default Grid;