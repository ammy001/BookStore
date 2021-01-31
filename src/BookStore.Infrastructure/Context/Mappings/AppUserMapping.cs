using BookStore.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookStore.Infrastructure.Context.Mappings
{
    public class AppUserMapping : IEntityTypeConfiguration<AppUser>
    {
        public void Configure(EntityTypeBuilder<AppUser> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.UserName)
                .IsRequired()
                .HasColumnType("varchar(150)");

            builder.Property(u => u.PasswordHash)
                .IsRequired()
                .HasColumnType("varbinary(max)");

            builder.Property(u => u.PasswordSalt)
                .IsRequired()
                .HasColumnType("varbinary(max)");
        }
    }
}
