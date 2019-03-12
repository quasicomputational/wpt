// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/shape_detection/public/mojom/barcodedetection_provider.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('shapeDetection.mojom');
  var barcodedetection$ =
      mojo.internal.exposeNamespace('shapeDetection.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/shape_detection/public/mojom/barcodedetection.mojom', 'barcodedetection.mojom.js');
  }


  var BarcodeFormat = {};
  BarcodeFormat.AZTEC = 0;
  BarcodeFormat.CODE_128 = BarcodeFormat.AZTEC + 1;
  BarcodeFormat.CODE_39 = BarcodeFormat.CODE_128 + 1;
  BarcodeFormat.CODE_93 = BarcodeFormat.CODE_39 + 1;
  BarcodeFormat.CODABAR = BarcodeFormat.CODE_93 + 1;
  BarcodeFormat.DATA_MATRIX = BarcodeFormat.CODABAR + 1;
  BarcodeFormat.EAN_13 = BarcodeFormat.DATA_MATRIX + 1;
  BarcodeFormat.EAN_8 = BarcodeFormat.EAN_13 + 1;
  BarcodeFormat.ITF = BarcodeFormat.EAN_8 + 1;
  BarcodeFormat.PDF417 = BarcodeFormat.ITF + 1;
  BarcodeFormat.QR_CODE = BarcodeFormat.PDF417 + 1;
  BarcodeFormat.UNKNOWN = BarcodeFormat.QR_CODE + 1;
  BarcodeFormat.UPC_A = BarcodeFormat.UNKNOWN + 1;
  BarcodeFormat.UPC_E = BarcodeFormat.UPC_A + 1;
  BarcodeFormat.MIN_VALUE = 0,
  BarcodeFormat.MAX_VALUE = 13,

  BarcodeFormat.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
      return true;
    }
    return false;
  };

  BarcodeFormat.validate = function(enumValue) {
    var isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function BarcodeDetectorOptions(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BarcodeDetectorOptions.prototype.initDefaults_ = function() {
    this.formats = null;
  };
  BarcodeDetectorOptions.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BarcodeDetectorOptions.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BarcodeDetectorOptions.formats
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(BarcodeFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BarcodeDetectorOptions.encodedSize = codec.kStructHeaderSize + 8;

  BarcodeDetectorOptions.decode = function(decoder) {
    var packed;
    var val = new BarcodeDetectorOptions();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.formats = decoder.decodeArrayPointer(new codec.Enum(BarcodeFormat));
    return val;
  };

  BarcodeDetectorOptions.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BarcodeDetectorOptions.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(BarcodeFormat), val.formats);
  };
  function BarcodeDetectionProvider_CreateBarcodeDetection_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BarcodeDetectionProvider_CreateBarcodeDetection_Params.prototype.initDefaults_ = function() {
    this.request = new bindings.InterfaceRequest();
    this.options = null;
  };
  BarcodeDetectionProvider_CreateBarcodeDetection_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BarcodeDetectionProvider_CreateBarcodeDetection_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BarcodeDetectionProvider_CreateBarcodeDetection_Params.request
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate BarcodeDetectionProvider_CreateBarcodeDetection_Params.options
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, BarcodeDetectorOptions, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BarcodeDetectionProvider_CreateBarcodeDetection_Params.encodedSize = codec.kStructHeaderSize + 16;

  BarcodeDetectionProvider_CreateBarcodeDetection_Params.decode = function(decoder) {
    var packed;
    var val = new BarcodeDetectionProvider_CreateBarcodeDetection_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.request = decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.options = decoder.decodeStructPointer(BarcodeDetectorOptions);
    return val;
  };

  BarcodeDetectionProvider_CreateBarcodeDetection_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BarcodeDetectionProvider_CreateBarcodeDetection_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.InterfaceRequest, val.request);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(BarcodeDetectorOptions, val.options);
  };
  function BarcodeDetectionProvider_EnumerateSupportedFormats_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BarcodeDetectionProvider_EnumerateSupportedFormats_Params.prototype.initDefaults_ = function() {
  };
  BarcodeDetectionProvider_EnumerateSupportedFormats_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BarcodeDetectionProvider_EnumerateSupportedFormats_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BarcodeDetectionProvider_EnumerateSupportedFormats_Params.encodedSize = codec.kStructHeaderSize + 0;

  BarcodeDetectionProvider_EnumerateSupportedFormats_Params.decode = function(decoder) {
    var packed;
    var val = new BarcodeDetectionProvider_EnumerateSupportedFormats_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  BarcodeDetectionProvider_EnumerateSupportedFormats_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BarcodeDetectionProvider_EnumerateSupportedFormats_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.prototype.initDefaults_ = function() {
    this.supportedFormats = null;
  };
  BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.supportedFormats
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 4, new codec.Enum(BarcodeFormat), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.supportedFormats = decoder.decodeArrayPointer(new codec.Enum(BarcodeFormat));
    return val;
  };

  BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.Enum(BarcodeFormat), val.supportedFormats);
  };
  var kBarcodeDetectionProvider_CreateBarcodeDetection_Name = 0;
  var kBarcodeDetectionProvider_EnumerateSupportedFormats_Name = 1;

  function BarcodeDetectionProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(BarcodeDetectionProvider,
                                                   handleOrPtrInfo);
  }

  function BarcodeDetectionProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        BarcodeDetectionProvider, associatedInterfacePtrInfo);
  }

  BarcodeDetectionProviderAssociatedPtr.prototype =
      Object.create(BarcodeDetectionProviderPtr.prototype);
  BarcodeDetectionProviderAssociatedPtr.prototype.constructor =
      BarcodeDetectionProviderAssociatedPtr;

  function BarcodeDetectionProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  BarcodeDetectionProviderPtr.prototype.createBarcodeDetection = function() {
    return BarcodeDetectionProviderProxy.prototype.createBarcodeDetection
        .apply(this.ptr.getProxy(), arguments);
  };

  BarcodeDetectionProviderProxy.prototype.createBarcodeDetection = function(request, options) {
    var params_ = new BarcodeDetectionProvider_CreateBarcodeDetection_Params();
    params_.request = request;
    params_.options = options;
    var builder = new codec.MessageV0Builder(
        kBarcodeDetectionProvider_CreateBarcodeDetection_Name,
        codec.align(BarcodeDetectionProvider_CreateBarcodeDetection_Params.encodedSize));
    builder.encodeStruct(BarcodeDetectionProvider_CreateBarcodeDetection_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  BarcodeDetectionProviderPtr.prototype.enumerateSupportedFormats = function() {
    return BarcodeDetectionProviderProxy.prototype.enumerateSupportedFormats
        .apply(this.ptr.getProxy(), arguments);
  };

  BarcodeDetectionProviderProxy.prototype.enumerateSupportedFormats = function() {
    var params_ = new BarcodeDetectionProvider_EnumerateSupportedFormats_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kBarcodeDetectionProvider_EnumerateSupportedFormats_Name,
          codec.align(BarcodeDetectionProvider_EnumerateSupportedFormats_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(BarcodeDetectionProvider_EnumerateSupportedFormats_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function BarcodeDetectionProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  BarcodeDetectionProviderStub.prototype.createBarcodeDetection = function(request, options) {
    return this.delegate_ && this.delegate_.createBarcodeDetection && this.delegate_.createBarcodeDetection(request, options);
  }
  BarcodeDetectionProviderStub.prototype.enumerateSupportedFormats = function() {
    return this.delegate_ && this.delegate_.enumerateSupportedFormats && this.delegate_.enumerateSupportedFormats();
  }

  BarcodeDetectionProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBarcodeDetectionProvider_CreateBarcodeDetection_Name:
      var params = reader.decodeStruct(BarcodeDetectionProvider_CreateBarcodeDetection_Params);
      this.createBarcodeDetection(params.request, params.options);
      return true;
    default:
      return false;
    }
  };

  BarcodeDetectionProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kBarcodeDetectionProvider_EnumerateSupportedFormats_Name:
      var params = reader.decodeStruct(BarcodeDetectionProvider_EnumerateSupportedFormats_Params);
      this.enumerateSupportedFormats().then(function(response) {
        var responseParams =
            new BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams();
        responseParams.supportedFormats = response.supportedFormats;
        var builder = new codec.MessageV1Builder(
            kBarcodeDetectionProvider_EnumerateSupportedFormats_Name,
            codec.align(BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateBarcodeDetectionProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kBarcodeDetectionProvider_CreateBarcodeDetection_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = BarcodeDetectionProvider_CreateBarcodeDetection_Params;
      break;
      case kBarcodeDetectionProvider_EnumerateSupportedFormats_Name:
        if (message.expectsResponse())
          paramsClass = BarcodeDetectionProvider_EnumerateSupportedFormats_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateBarcodeDetectionProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kBarcodeDetectionProvider_EnumerateSupportedFormats_Name:
        if (message.isResponse())
          paramsClass = BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var BarcodeDetectionProvider = {
    name: 'shape_detection.mojom.BarcodeDetectionProvider',
    kVersion: 0,
    ptrClass: BarcodeDetectionProviderPtr,
    proxyClass: BarcodeDetectionProviderProxy,
    stubClass: BarcodeDetectionProviderStub,
    validateRequest: validateBarcodeDetectionProviderRequest,
    validateResponse: validateBarcodeDetectionProviderResponse,
  };
  BarcodeDetectionProviderStub.prototype.validator = validateBarcodeDetectionProviderRequest;
  BarcodeDetectionProviderProxy.prototype.validator = validateBarcodeDetectionProviderResponse;
  exports.BarcodeFormat = BarcodeFormat;
  exports.BarcodeDetectorOptions = BarcodeDetectorOptions;
  exports.BarcodeDetectionProvider = BarcodeDetectionProvider;
  exports.BarcodeDetectionProviderPtr = BarcodeDetectionProviderPtr;
  exports.BarcodeDetectionProviderAssociatedPtr = BarcodeDetectionProviderAssociatedPtr;
})();