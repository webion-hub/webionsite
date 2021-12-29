import { Box } from "@mui/material";
import parse from 'html-react-parser';


export default class IllustrationLoader {
  /**
   * @param {IllustrationProps} props
   */
  static create = (props) => {
    return new IllustrationLoader(props);
  }

  /**
   * @private
   * @param {IllustrationProps} props
   */
  constructor (props) {
    this.path = props.path;
    this.ref = props.ref;
    this.boxProps = props.boxProps;
    this.svgProps = props.svgProps;
  }


  load = async () => {
    const svg = IllustrationLoader.cache.has(this.path)
      ? this.fetchFromCache()
      : this.fetchFromServer();

    return svg.then(this.createSvgBox);
  }

  /**
   * @private
   */
  fetchFromServer = async () => {
    return fetch(this.path)
      .then(resp => resp.text())
      .then(rawSvg => this.replaceProps(rawSvg))
      .then(rawSvg => parse(rawSvg))
      .then(svg => this.storeInCache(svg));
  }

  /**
   * @private
   * @param {string} rawSvg
   */
  replaceProps = (rawSvg) => {
    return Object
      .entries(this.svgProps)
      .reduce(this.replaceProp, rawSvg);
  }

  /**
   * @private
   * @param {string} curr
   * @param {[string, string]}
   * @returns {string}
   */
  replaceProp = (curr, [prop, value]) => {
    const pattern = new RegExp(`{${prop}}`, 'g');
    return curr.replace(pattern, value);
  };


  /**
   * @private
   * @param {JSX.Element} svg
   */
  createSvgBox = (svg) => {
    return (
      <Box {...this.boxProps} ref={this.ref}>
        {svg}
      </Box>
    );
  }


  /**
   * @private
   */
  fetchFromCache = async () => {
    const elem = IllustrationLoader.cache.get(this.path);
    return Promise.resolve(elem);
  }

  /**
   * @private
   * @param {JSX.Element} element
   */
  storeInCache = (element) => {
    IllustrationLoader.cache.set(this.path, element);
    return element;
  }
}

/**
 * @private
 * @type {Map<string, JSX.Element>}
 */
IllustrationLoader.cache = new Map();
