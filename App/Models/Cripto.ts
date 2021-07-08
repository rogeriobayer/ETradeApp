export interface Cripto {
    percent_change_24h(
        arg0: string,
        percent_change_24h: any,
    ):
        | import('styled-system').ResponsiveValue<
              string | number | symbol,
              Required<
                  import('styled-system').Theme<
                      import('styled-system').TLengthStyledSystem
                  >
              >
          >
        | undefined;
    percent_change_1h(
        percent_change_1h: any,
    ):
        | string
        | import('native-base/lib/typescript/components/primitives/Box/types').ILinearGradientProps
        | undefined;
    price_usd: any;
    id: Number;
    symbol: string;
    name: string;
    nameId: string;
    rank: Number;

    priceUsd: Number;
    percentChange24: Number;
    percentChange1: Number;
    percentChange7d: Number;
    price_btc: Number;
}
