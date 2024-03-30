'use client'

import { CoinList } from '@/widgets/CoinList';
import React from 'react'
import { Resizable, ResizableBox } from 'react-resizable';
type Props = {}

const MainList = (props: Props) => {

    const [width, setWidth] = React.useState(200)
    const [height, setHeight] = React.useState(200)

    return (
        <ResizableBox
            width={width}
            height={height}
            onResize={(event, { element, size }) => {
                setWidth(size.width);
                setHeight(size.height);
            }}><CoinList />
        </ResizableBox>
    )
}

export default MainList