/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.usa.g34.reto.apiAlquilerMotos.controller;

import com.usa.g34.reto.apiAlquilerMotos.model.Motocicleta;
import com.usa.g34.reto.apiAlquilerMotos.service.MotocicletaService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jpine
 */
@RestController
@RequestMapping("/Motorbike")
public class MotocicletaController {
    
    @Autowired
    private MotocicletaService motocicletaService;
    //GET
    @GetMapping("/all")
    public List<Motocicleta> getMotocicletas(){
        return motocicletaService.getAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Motocicleta> getMotocicleta(@PathVariable("id") int motocicletaId){
        return motocicletaService.getMotocicleta(motocicletaId);
    }
    
    //POST
    @PostMapping("/save")
    public Motocicleta save(@RequestBody Motocicleta motocicleta){
        return motocicletaService.save(motocicleta);
    }
    
    //PUT
    @PutMapping("/update")
    public Motocicleta update(@RequestBody Motocicleta motocicleta){
        return motocicletaService.update(motocicleta);
    }
    
    //DELETE
    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") int id){
        return motocicletaService.deleteMotocicleta(id);
    }
}
