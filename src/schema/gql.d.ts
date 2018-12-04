/**
 * @see https://webpack.js.org/guides/typescript/#importing-other-assets
 * @see https://github.com/apollographql/graphql-tag/issues/59#issuecomment-316991007
 */
declare module '*.gql' {
    import {DocumentNode} from 'graphql';

    const value: DocumentNode;
    export = value;
}
