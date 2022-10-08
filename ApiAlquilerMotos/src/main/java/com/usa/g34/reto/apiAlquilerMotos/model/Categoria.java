/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.usa.g34.reto.apiAlquilerMotos.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author jpine
 */

@Entity
@Table(name="categoria")
public class Categoria implements Serializable{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 45, nullable = true)
    private String name;
    @Column(length = 250, nullable = true)
    private String descripction;
    
    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy="category")
    @JsonIgnoreProperties("category")
    private List<Motocicleta> motocicletas;

    public Categoria() {
    }

    public Categoria(Integer id) {
        this.id = id;
    }

    public Categoria(Integer id, String name, String descripction, List<Motocicleta> motocicletas) {
        this.id = id;
        this.name = name;
        this.descripction = descripction;
        this.motocicletas = motocicletas;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescripction() {
        return descripction;
    }

    public void setDescripction(String descripction) {
        this.descripction = descripction;
    }

    public List<Motocicleta> getMotocicletas() {
        return motocicletas;
    }

    public void setMotocicletas(List<Motocicleta> motocicletas) {
        this.motocicletas = motocicletas;
    }

    @Override
    public String toString() {
        return "Categoria{" + "id=" + id + ", name=" + name + ", descripction=" + descripction + ", motocicletas=" + motocicletas + '}';
    }
    
    
}
