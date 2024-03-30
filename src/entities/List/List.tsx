import { RootInterface } from '@components/shared/api/list/types'
import React from 'react'
import { Coin } from '../Coin';
import { Flex, ScrollArea } from '@mantine/core';

type Props = {
    data: (RootInterface & ResponseType) | undefined;
    isLoading: boolean;
    isSuccess: boolean;
}

export const List = ({ data, isLoading, isSuccess }: Props) => {
    return (
        <ScrollArea
            h={550}
            offsetScrollbars
            scrollbarSize={3}
            scrollHideDelay={500}
        >
            <Flex gap="md" justify="center" direction="column" wrap="wrap">
                {isSuccess && data?.Data.map(({ CoinInfo: coin, DISPLAY: info }) => {
                    return (
                        <Coin
                            key={coin.Id}
                            price={info?.USD.PRICE}
                            name={coin.FullName}
                            // img={`${process.env.NEXT_PUBLIC_API_URL}${coin.ImageUrl}`}
                            change={info?.USD?.CHANGE24HOUR}
                            bone={false}
                        />
                    );
                })}
            </Flex>

            {isLoading &&
                Array.from({ length: 10 }).map((_, index) => (
                    <Coin key={index} bone={true} />
                ))}
        </ScrollArea>
    )
}