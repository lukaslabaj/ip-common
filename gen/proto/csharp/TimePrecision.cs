// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: shared/time_precision.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Shared {

  /// <summary>Holder for reflection information generated from shared/time_precision.proto</summary>
  public static partial class TimePrecisionReflection {

    #region Descriptor
    /// <summary>File descriptor for shared/time_precision.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static TimePrecisionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChtzaGFyZWQvdGltZV9wcmVjaXNpb24ucHJvdG8SBnNoYXJlZCrKAQoNVGlt",
            "ZVByZWNpc2lvbhIeChpUSU1FX1BSRUNJU0lPTl9VTlNQRUNJRklFRBAAEhYK",
            "ElRJTUVfUFJFQ0lTSU9OX0RBWRABEhcKE1RJTUVfUFJFQ0lTSU9OX1dFRUsQ",
            "AhIYChRUSU1FX1BSRUNJU0lPTl9NT05USBADEhoKFlRJTUVfUFJFQ0lTSU9O",
            "X1FVQVJURVIQBBIXChNUSU1FX1BSRUNJU0lPTl9ZRUFSEAUSGQoVVElNRV9Q",
            "UkVDSVNJT05fREVDQURFEAZCjQEKCmNvbS5zaGFyZWRCElRpbWVQcmVjaXNp",
            "b25Qcm90b1ABWjNnaXRodWIuY29tL2x1a2FzbGFiYWovaXAtY29tbW9uL2dl",
            "bi9wcm90by9nby9zaGFyZWSiAgNTWFiqAgZTaGFyZWTKAgZTaGFyZWTiAhJT",
            "aGFyZWRcR1BCTWV0YWRhdGHqAgZTaGFyZWRiBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Shared.TimePrecision), }, null, null));
    }
    #endregion

  }
  #region Enums
  public enum TimePrecision {
    [pbr::OriginalName("TIME_PRECISION_UNSPECIFIED")] Unspecified = 0,
    [pbr::OriginalName("TIME_PRECISION_DAY")] Day = 1,
    [pbr::OriginalName("TIME_PRECISION_WEEK")] Week = 2,
    [pbr::OriginalName("TIME_PRECISION_MONTH")] Month = 3,
    [pbr::OriginalName("TIME_PRECISION_QUARTER")] Quarter = 4,
    [pbr::OriginalName("TIME_PRECISION_YEAR")] Year = 5,
    [pbr::OriginalName("TIME_PRECISION_DECADE")] Decade = 6,
  }

  #endregion

}

#endregion Designer generated code
