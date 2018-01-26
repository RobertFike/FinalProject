using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NW_Central_Library.Models.LibraryModels
{
    public partial class AddrType
    {
        public AddrType()
        {
            Address = new HashSet<Address>();
        }

        public string Id { get; set; }

        [Display (Name = "Address Type")]
        public string Type { get; set; }

        [Display(Name = "Inactive")]
        public bool? InActive { get; set; }

        [Display(Name = "Inactive Date")]
        public DateTime? InActiveDate { get; set; }

        public ICollection<Address> Address { get; set; }
    }
}
