/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The IndicesConstituents model module.
 * @module model/IndicesConstituents
 * @version 1.2.0
 */
class IndicesConstituents {
    /**
     * Constructs a new <code>IndicesConstituents</code>.
     * @alias module:model/IndicesConstituents
     */
    constructor() { 
        
        IndicesConstituents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IndicesConstituents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndicesConstituents} obj Optional instance to populate.
     * @return {module:model/IndicesConstituents} The populated <code>IndicesConstituents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IndicesConstituents();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('constituents')) {
                obj['constituents'] = ApiClient.convertToType(data['constituents'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Index's symbol.
 * @member {String} symbol
 */
IndicesConstituents.prototype['symbol'] = undefined;

/**
 * Array of constituents.
 * @member {Array.<String>} constituents
 */
IndicesConstituents.prototype['constituents'] = undefined;






export default IndicesConstituents;
