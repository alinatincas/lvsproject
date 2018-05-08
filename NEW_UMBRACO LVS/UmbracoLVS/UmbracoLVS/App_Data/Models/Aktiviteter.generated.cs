//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.10.102
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Aktiviteter</summary>
	[PublishedContentModel("aktiviteter")]
	public partial class Aktiviteter : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "aktiviteter";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Aktiviteter(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Aktiviteter, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Hidden text1
		///</summary>
		[ImplementPropertyType("hiddenText1")]
		public string HiddenText1
		{
			get { return this.GetPropertyValue<string>("hiddenText1"); }
		}

		///<summary>
		/// Hidden text2
		///</summary>
		[ImplementPropertyType("hiddenText2")]
		public string HiddenText2
		{
			get { return this.GetPropertyValue<string>("hiddenText2"); }
		}

		///<summary>
		/// rmHeadline
		///</summary>
		[ImplementPropertyType("rmHeadline")]
		public string RmHeadline
		{
			get { return this.GetPropertyValue<string>("rmHeadline"); }
		}

		///<summary>
		/// Shown text1
		///</summary>
		[ImplementPropertyType("shownText1")]
		public string ShownText1
		{
			get { return this.GetPropertyValue<string>("shownText1"); }
		}

		///<summary>
		/// Shown text2
		///</summary>
		[ImplementPropertyType("shownText2")]
		public string ShownText2
		{
			get { return this.GetPropertyValue<string>("shownText2"); }
		}
	}
}
